import { MdOutlineMail } from "react-icons/md";
import CardComponent from "../component/CardComponent";
import { ActionButtons, Divider } from "./TicketSelection";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { isValidImageUrl } from "../util/ValidateImage";
import PreviewImageDefault from "../assets/default_image.png";
import { uploadImageToCloudinary } from "../util/uploadImage";
import { useLocation, useNavigate, useParams } from "react-router";

const StyledInput = styled.input`
  display: grid;
  width: 95%;
  padding: var(--spacing-sm);
  border: 1px solid var(--color-secondary);
  border-radius: var(--border-radius-md);
  background-color: var(--color-input-bg);
  cursor: pointer;
  color: var(--color-text);

  &::placeholder {
    color: var(--color-text-placeholder);
  }

  &:hover {
    border: 2px solid var(--color-secondary);
  }

  &:focus {
    outline: 1px solid var(--color-text);
  }
`;

const EmailContainer = styled.div`
  position: relative;

  input {
    text-indent: var(--spacing-lg);
  }

  @media (max-width: 500px) {
    input {
      text-indent: var(--spacing-sm);
    }
  }
`;

const EmailIcon = styled(MdOutlineMail)`
  position: absolute;
  top: 20%;
  left: 2%;

  @media (max-width: 500px) {
    top: 30%;
    left: 2%;
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: var(--color-error);
  padding-left: var(--spacing-sm);
`;

const ImagePreviewContainer = styled.div`
  background-color: var(--color-image-preview-bg);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-card-border);
  padding: var(--spacing-sm) var(--spacing-md);

  p {
    margin: 0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-xs);
`;

const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledButton = styled.button`
  width: 45%;
  padding: var(--spacing-sm);
  color: ${({ submit }) =>
    submit ? "var(--color-text)" : "var(--color-accent)"};
  border: 1px solid var(--color-secondary);
  border-radius: var(--border-radius-md);
  margin-top: var(--spacing-sm);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ submit }) =>
    submit ? "var(--color-accent)" : "var(--color-input-bg)"};

  &:hover {
    background-color: ${({ submit }) =>
      submit ? "var(--color-accent-dark)" : ""};
    color: var(--color-text);
    transition: all 0.3s;
  }
`;

const FormContainer = styled.form``;

const FormRow = styled.div`
  margin-bottom: 0.5rem;
`;

function OrderDetails() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();
  const formData = watch();
  const [imagePreview, setImagePreview] = useState(
    localStorage.getItem("imagePreview") || PreviewImageDefault
  );
  const [isUploading, setIsUploading] = useState(false);
  const location = useLocation();
  const { ticketType, quantity } = location.state;
  const navigate = useNavigate();
  //   console.log(quantity, ticketType);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageToCloudinary(file, setImagePreview, setIsUploading, setValue);
    }
  };

  const onSubmit = (data) => {
    navigate("/step-3", {
      state: {
        ticketType: ticketType,
        quantity: quantity,
        formData: data,
      },
    });
  };
  useEffect(() => {
    const savedData = localStorage.getItem("formData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
    }
  }, [setValue]);
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));

    if (formData.imageUrl) {
      localStorage.setItem("imagePreview", formData.imageUrl);
    }
  }, [formData]);

  return (
    <CardComponent title="Attendee Details" progress={2}>
      <ImagePreviewContainer>
        <p>Image Preview:</p>
        <ImageWrapper>
          <PreviewImage src={imagePreview} alt="Uploaded Avatar" />
        </ImageWrapper>
      </ImagePreviewContainer>
      <Divider />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <label htmlFor="imageUpload">Upload Image:</label>
          <br />
          <StyledInput
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleFileChange}
            disabled={isUploading}
          />
          {isUploading && <p>Uploading image...</p>}
        </FormRow>
        <FormRow>
          <label htmlFor="imageUrl">Image URL:</label>
          <br />
          <StyledInput
            type="text"
            placeholder="Image URL"
            id="imageUrl"
            {...register("imageUrl", {
              required: "Image URL is required",
              pattern: {
                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i,
                message: "Invalid image URL format",
              },
              validate: async (url) =>
                (await isValidImageUrl(url)) || "Invalid image URL",
            })}
            onChange={(e) => setImagePreview(e.target.value)}
          />
          {errors?.imageUrl?.message && (
            <ErrorMessage>{errors?.imageUrl?.message}</ErrorMessage>
          )}
        </FormRow>
        <FormRow>
          <label htmlFor="firstName">First Name:</label>
          <br />
          <StyledInput
            type="text"
            placeholder="First Name"
            id="firstName"
            {...register("firstName", {
              required: "This field is required",
            })}
          />
          {errors?.firstName?.message && (
            <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
          )}
        </FormRow>
        <FormRow>
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <StyledInput
            type="text"
            placeholder="Last Name"
            id="lastName"
            {...register("lastName", {
              required: "This field is required",
            })}
          />
          {errors?.lastName?.message && (
            <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
          )}
        </FormRow>
        <FormRow>
          <label htmlFor="email">Email Address:</label>
          <br />
          <EmailContainer>
            <StyledInput
              type="text"
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              placeholder="hello@gmail.com"
            />
            <EmailIcon />
          </EmailContainer>
          {errors?.email?.message && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}
        </FormRow>
        <ActionButtons>
          <StyledButton
            type="button"
            aria-label="Go back"
            onClick={() => navigate(-1)}
          >
            Back
          </StyledButton>
          <StyledButton submit={true} type="submit" aria-label="Submit form">
            Get Ticket
          </StyledButton>
        </ActionButtons>
      </FormContainer>
    </CardComponent>
  );
}

export default OrderDetails;
