import React, { useState, useCallback } from "react";
import styled from "styled-components";
import UploadIconL from "../assets/cloud-download.png";
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineCloudUpload } from "react-icons/ai";

const UploadContainer = styled.div`
  background-color: rgba(0, 128, 128, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid
    ${(props) =>
      props.hasError ? "var(--color-error)" : "rgba(0, 128, 128, 0.3)"};
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.isDragging &&
    `
    background-color: rgba(0, 128, 128, 0.2);
    border-color: rgba(0, 128, 128, 0.5);
  `}

  ${(props) =>
    props.hasImage &&
    `
    padding: 0;
    aspect-ratio: 16/9;
  `}
`;

const UploadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: teal;
`;

const UploadIcon = styled(AiOutlineCloudUpload)`
  width: 2rem;
  height: 2rem;
  color: teal;
  opacity: 0.7;
`;

const UploadText = styled.p`
  margin: 0;
  text-align: center;
  color: teal;
  opacity: 0.7;
  font-size: 0.9rem;
`;

const Title = styled.h3`
  color: teal;
  margin: 0 0 1rem 0;
  font-weight: 500;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: var(--color-error);
  display: block;
  margin-top: 0.5rem;
`;

const ImageUpload = ({ onImageUpload, error }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleFile = async (file) => {
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setUploadedImage(previewUrl);

      await onImageUpload(file);
    }
  };

  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  return (
    <div>
      <Title>Upload Profile Photo</Title>
      <UploadContainer
        isDragging={isDragging}
        hasError={!!error}
        hasImage={!!uploadedImage}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        {uploadedImage ? (
          <PreviewImage src={uploadedImage} alt="Uploaded preview" />
        ) : (
          <UploadContent>
            <UploadIcon />
            <UploadText>Drag & drop or click to upload</UploadText>
          </UploadContent>
        )}
        <HiddenInput
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </UploadContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default ImageUpload;
