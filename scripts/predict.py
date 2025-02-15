import torch
from torchvision import models, transforms
from PIL import Image
import sys

# Charger le modèle
model = models.resnet50()
num_classes = 3
model.fc = torch.nn.Linear(model.fc.in_features, num_classes)
model.load_state_dict(torch.load("model/cnn_model.pth"))
model.eval()

# Transformer l'image
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

def predict(image_path):
    image = Image.open(image_path)
    image = transform(image).unsqueeze(0)  # Ajouter une dimension batch
    with torch.no_grad():
        output = model(image)
        _, predicted = torch.max(output, 1)
    
    classes = ["cancer", "cancer_pas_grave" , "pas_de_cancer"]
    return classes[predicted.item()]

# Exécution
image_path = sys.argv[1]
print(f"Résultat : {predict(image_path)}")
