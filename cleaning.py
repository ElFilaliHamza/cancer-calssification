import os
from PIL import Image
import numpy as np
import shutil

# Dossier source
source_dir = "cancer_peau_peu"
# Dossier de destination temporaire
clean_dir = "cancer_peau_peu_clean"

# Créez le dossier de destination si ce n'est pas déjà fait
os.makedirs(clean_dir, exist_ok=True)

# Liste des images dans le dossier source
images = os.listdir(source_dir)

# Fonction pour vérifier et redimensionner les images
def clean_image(image_path):
    try:
        # Ouvrir l'image
        img = Image.open(image_path)
        
        # Redimensionner l'image (si nécessaire)
        img = img.resize((224, 224))  # Choisissez la taille 
        img.save(image_path)  # Sauvegarder l'image redimensionnée
        
        return True
    except Exception as e:
        print(f"Erreur avec l'image {image_path}: {e}")
        return False

# Copier et nettoyer les images
for img_name in images:
    img_path = os.path.join(source_dir, img_name)
    
    if clean_image(img_path):
        shutil.copy(img_path, os.path.join(clean_dir, img_name))

print("Nettoyage terminé !")
