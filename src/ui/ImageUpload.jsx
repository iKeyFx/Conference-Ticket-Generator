import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PreviewImageDefault from "../assets/default_image.png";

const UploadContainer = styled.div`
  background-color: var(--color-image-preview-bg);
  border-radius: var(--border-radius-lg);
  border: 2px dashed
    ${(props) =>
      props.hasError ? "var(--color-error)" : "var(--color-secondary)"};
  padding: var(--spacing-sm);
  margin-bottom: ${(props) => (props.hasError ? "0" : "var(--spacing-md)")};
  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) =>
    props.isDragging &&
    `
    border-color: var(--color-accent);
    background-color: rgba(0, 0, 0, 0.05);
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
`;

const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const UploadText = styled.p`
  margin: var(--spacing-xs) 0;
  text-align: center;
  color: var(--color-text);
`;

const HiddenInput = styled.input`
  display: none;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: var(--color-error);
  padding-left: var(--spacing-sm);
  display: block;
  margin-bottom: var(--spacing-md);
`;

const ImageUpload = ({
  onImageUpload,
  imagePreview = PreviewImageDefault,
  error,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        onImageUpload(files[0]);
      }
    },
    [onImageUpload]
  );

  const handleChange = useCallback(
    (e) => {
      const files = e.target.files;
      if (files && files[0]) {
        onImageUpload(files[0]);
      }
    },
    [onImageUpload]
  );

  return (
    <>
      <UploadContainer
        isDragging={isDragging}
        hasError={!!error}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <ImageContainer>
          <PreviewImage src={imagePreview} alt="Preview" />
          <UploadText>
            {isDragging
              ? "Drop image here"
              : "Drag and drop an image or click to upload"}
          </UploadText>
        </ImageContainer>
        <HiddenInput
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </UploadContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default ImageUpload;
