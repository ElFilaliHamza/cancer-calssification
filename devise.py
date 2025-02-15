import os
import shutil
from sklearn.model_selection import train_test_split

# Dossier source pour les images nettoyées
source_dir = "no_cancer_sang_clean"
# Dossier de destination pour la division
base_dir = "dataset/no_cancer_sang_peau"

# Créez les répertoires train, val, test si ce n'est pas déjà fait
for split in ['train', 'val', 'test']:
    os.makedirs(os.path.join(base_dir, split), exist_ok=True)

# Liste des images dans le dossier source
images = os.listdir(source_dir)

# Diviser les images en train, val, test (70% train, 15% val, 15% test)
train, temp = train_test_split(images, test_size=0.3, random_state=42)
val, test = train_test_split(temp, test_size=0.5, random_state=42)

# Déplacer les images dans les bons dossiers
for img in train:
    shutil.copy(os.path.join(source_dir, img), os.path.join(base_dir, "train", img))
for img in val:
    shutil.copy(os.path.join(source_dir, img), os.path.join(base_dir, "val", img))
for img in test:
    shutil.copy(os.path.join(source_dir, img), os.path.join(base_dir, "test", img))

print("Division terminée !")
