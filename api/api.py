from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import api.api_config as api_config  # Import the configuration module
import torch

# Initialize the FastAPI app
app = FastAPI()

# Allow CORS for all origins (adjust as needed for your frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=api_config.CORS_ORIGINS,
    allow_methods=api_config.CORS_METHODS,
    allow_headers=api_config.CORS_HEADERS,
)

# Use the configurations from api_config
transform = api_config.TRANSFORM
model = api_config.MODEL
device = api_config.DEVICE
classes = api_config.CLASSES


@app.get("/")
async def root():
    """
    Test endpoint to verify the API is running.

    Returns:
        dict: A dictionary containing a welcome message.
    """
    return {"message": "Welcome to the FastAPI application!"}


@app.post("/predict-image/")
async def predict_image(file: UploadFile = File(...)):
    """
    Predict the class of an uploaded image.

    Args:
        file (UploadFile): The image file uploaded by the user.

    Returns:
        dict: A dictionary containing the predicted class.
    """
    # Read the image
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)

    # Make prediction
    with torch.no_grad():
        outputs = model(image)
        _, predicted = torch.max(outputs, 1)
        prediction = classes[predicted.item()]

    return {"prediction": prediction}
