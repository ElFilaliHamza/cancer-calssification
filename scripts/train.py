import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import models, datasets, transforms #  (models)Contient des modèles pré-entraînés : ResNet50  : CNN de 50 couches.
from torch.utils.data import DataLoader, ConcatDataset

# Chemins vers les datasets
data_path = "dataset"

# Transformations des images
transform = transforms.Compose([
    transforms.Resize((224, 224)),# la taille pour ResNet50
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# Charger les datasets de peau et de sang
train_peau = datasets.ImageFolder(f"{data_path}/peau/train", transform=transform)#le transformation pre-preparer
val_peau = datasets.ImageFolder(f"{data_path}/peau/val", transform=transform)

train_sang = datasets.ImageFolder(f"{data_path}/sang/train", transform=transform)
val_sang = datasets.ImageFolder(f"{data_path}/sang/val", transform=transform)

# Fusionner les datasets
train_dataset = ConcatDataset([train_peau, train_sang])
val_dataset = ConcatDataset([val_peau, val_sang])

train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=32, shuffle=False)

# Charger un modèle pré-entraîné (ResNet50)
model = models.resnet50(pretrained=True) # Charge un ResNet50 pré-entraîné sur ImageNet
num_classes = 3  # ("cancer", "pas_de_cancer", "cancer_pas_grave")
model.fc = nn.Linear(model.fc.in_features, num_classes)

# Définir l'entraînement
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)#la vitesse d’apprentissage
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# pour verfier si il y'a le data
print(f"Nombre d'images d'entraînement : {len(train_loader.dataset)}")


# Boucle d'entraînement
num_epochs = 10
for epoch in range(num_epochs):
    model.train()
    running_loss = 0.0
    for images, labels in train_loader:
        images, labels = images.to(device), labels.to(device) #transfère les données vers le GPU ou CPU pour accélérer le traitement
        optimizer.zero_grad()
        outputs = model(images)#passer par le modele ResNet50
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
        running_loss += loss.item()
    
    print(f"Époque {epoch+1}/{num_epochs} - Perte : {running_loss/len(train_loader):.4f}")

# Sauvegarder le modèle
torch.save(model.state_dict(), "model/cnn_model.pth")
print("Modèle entraîné et sauvegardé !")
