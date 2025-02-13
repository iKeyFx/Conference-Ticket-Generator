import { MdOutlineMail } from "react-icons/md";
import CardComponent from "../component/CardComponent";
import { ActionButtons, Divider } from "./TicketSelection";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import PreviewImageDefault from "../assets/default_image.png";
import { uploadImageToCloudinary } from "../util/uploadImage";
import { useLocation, useNavigate, useParams } from "react-router";
import ImageUpload from "./ImageUpload";

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

const TextArea = styled.textarea`
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

  const handleImageUpload = async (file) => {
    try {
      setIsUploading(true);
      const uploadedUrl = await uploadImageToCloudinary(
        file,
        setImagePreview,
        setIsUploading,
        setValue
      );
      if (uploadedUrl) {
        setValue("imageUrl", uploadedUrl);
        trigger("imageUrl"); // Trigger validation
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
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
    <CardComponent ContainerWidth="600px" title="Attendee Details" progress={2}>
      <ImageUpload
        onImageUpload={handleImageUpload}
        error={errors?.imageUrl?.message}
      />
      {isUploading && (
        <p style={{ color: "teal", textAlign: "center", margin: "1rem 0" }}>
          Uploading image...
        </p>
      )}
      <Divider />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <input
          type="hidden"
          {...register("imageUrl", {
            required: "Please upload an image",
          })}
        />
        <FormRow>
          <label htmlFor="name">Enter your name:</label>
          <br />
          <StyledInput
            type="text"
            id="name"
            {...register("name", {
              required: "This field is required",
            })}
          />
          {errors?.name?.message && (
            <ErrorMessage>{errors?.name?.message}</ErrorMessage>
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

        <FormRow>
          <label htmlFor="textarea">Special Request:</label>
          <br />
          <EmailContainer>
            <TextArea type="text" id="textarea" {...register("textarea")} />
          </EmailContainer>
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
