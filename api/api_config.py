import torch
import torch.nn as nn
from torchvision import models, transforms

# CORS settings
CORS_ORIGINS = ["*"]  # Replace "*" with your frontend URL if needed
CORS_METHODS = ["*"]
CORS_HEADERS = ["*"]

# Image preprocessing transformations
TRANSFORM = transforms.Compose(
    [
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ]
)

# Load the trained model
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
MODEL = models.resnet50(weights=None)  # Use weights=None instead of pretrained=False
MODEL.fc = nn.Linear(MODEL.fc.in_features, 3)
MODEL.load_state_dict(torch.load("model/cnn_model.pth", map_location=DEVICE))
MODEL.to(DEVICE)
MODEL.eval()

# Class labels
CLASSES = ["cancer", "pas_de_cancer", "cancer_pas_grave"]
