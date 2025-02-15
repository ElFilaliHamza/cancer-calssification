import torch
from torchvision import models, datasets, transforms
from torch.utils.data import DataLoader, ConcatDataset

# Charger le modèle
model = models.resnet50()
num_classes = 3  
model.fc = torch.nn.Linear(model.fc.in_features, num_classes)
model.load_state_dict(torch.load("model/cnn_model.pth"))
model.eval()  

# Prétraitement des images
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# Charger les données de validation
data_path = "dataset"
val_peau = datasets.ImageFolder(f"{data_path}/peau/val", transform=transform)
val_sang = datasets.ImageFolder(f"{data_path}/sang/val", transform=transform)

# Fusion des datasets
val_dataset = ConcatDataset([val_peau, val_sang])
val_loader = DataLoader(val_dataset, batch_size=32, shuffle=False)

# Évaluation de la précision
correct = 0
total = 0
with torch.no_grad():
    for images, labels in val_loader:
        outputs = model(images)
        _, predicted = torch.max(outputs, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

print(f"Précision : {100 * correct / total:.2f}%")
print("module bien evaluer!")