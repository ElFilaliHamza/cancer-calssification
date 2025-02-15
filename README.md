### README.md

# 🩺 Cancer Classification System

This repository contains a **Cancer Classification System** that uses a **pretrained ResNet-50 model** to classify medical images into three categories:

1. 🛑 **Cancer**
2. ✅ **No Cancer (Pas de Cancer)**
3. ⚠️ **Mild/Non-Severe Cancer (Cancer Pas Grave)**

The project was created as a **personal challenge** to compare my current skills to my past self. Previously, during my studies, I built a similar project to recognize football players' faces in one week. This time, I completed this project in just **4 hours of total work time**, showcasing my growth in efficiency and expertise — with the help of my AI fellows, of course 😉!

---

## ✨ Features

- 🎨 **Frontend**: Built with React, TailwindCSS, and Material-UI, the frontend provides a user-friendly interface for uploading images and viewing predictions.
- 🚀 **Backend**: Powered by FastAPI, the backend handles image preprocessing, model inference, and API communication.
- 🧠 **Model**: A ResNet-50 model pretrained on ImageNet, fine-tuned for cancer classification with three classes.
- 🌙 **Dark Mode**: The frontend supports light and dark themes for better accessibility.
- 🎆 **Particles Animation**: A visually appealing background using `react-tsparticles`.

---

## 📂 Project Structure

### 🖥️ Frontend

The frontend is located in the `frontend` directory and includes the following key components:

- **FileUpload**: A React component for uploading images.
- **PredictionResult**: Displays the prediction result with dynamic colors and icons.
- **ParticlesBackground**: Adds a particle animation background for visual appeal.
- **Home Page**: The main page where users can upload images and view predictions.

### 🛠️ Backend

The backend is located in the `api` directory and includes:

- **FastAPI**: Handles API requests for image prediction.
- **Model Loading**: Loads the pretrained ResNet-50 model and performs inference.
- **Image Preprocessing**: Uses PyTorch's `transforms` to resize, normalize, and prepare images for the model.

### 🧩 Model

The model is a **ResNet-50** architecture fine-tuned for three classes. It is trained using PyTorch and saved as `cnn_model.pth`. The training and evaluation scripts are located in the `scripts` directory.

---

## ⚙️ Installation and Setup

### 🛠️ Prerequisites

- **Python 3.8+**
- **Node.js 16+**
- **npm** or **yarn**
- **PyTorch** (with GPU support if available)

### 🖥️ Backend Setup

1. Navigate to the `cancer-classification` directory:

   ```bash
   cd cancer-classification
   ```

2. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:

   ```bash
   uvicorn api.api:app --reload
   ```

   The API will be available at `http://127.0.0.1:8000`.

### 🌐 Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `frontend` directory and add the backend API URL:

   ```env
   VITE_API_URL=http://127.0.0.1:8000
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   The frontend will be available at `http://127.0.0.1:5173`.

---

## 🖼️ Usage

1. Open the frontend in your browser (`http://127.0.0.1:5173`).
2. Upload an image of a medical scan (e.g., skin or blood sample).
3. Wait for the prediction to be processed.
4. View the result, which will indicate one of the following:
   - 🛑 **Cancer Detected**
   - ✅ **No Cancer Detected**
   - ⚠️ **Mild/Non-Severe Cancer**

---

## 🧠 Model Training

The model was trained using the `scripts/train.py` script. Below is an overview of the training process:

1. **Dataset**: The dataset includes images of skin and blood samples, divided into training and validation sets.
2. **Preprocessing**: Images are resized to 224x224, normalized, and converted to tensors.
3. **Architecture**: ResNet-50 with a modified fully connected layer for three classes.
4. **Optimizer**: Adam optimizer with a learning rate of 0.001.
5. **Loss Function**: CrossEntropyLoss.
6. **Training**: The model was trained for 10 epochs with a batch size of 32.

To train the model, run:

```bash
python scripts/train.py
```

The trained model is saved as `model/cnn_model.pth`.

---

## 🧪 Testing and Evaluation

The model's performance was evaluated using the `scripts/evaluate.py` script. The evaluation process involves:

1. Loading the validation dataset.
2. Calculating the accuracy of predictions.

To evaluate the model, run:

```bash
python scripts/evaluate.py
```

---

## 📁 Key Files

### 🖥️ Frontend

- `FileUpload.jsx`: Handles file uploads.
- `PredictionResult.jsx`: Displays prediction results.
- `themeColors.js`: Defines the color scheme for the app.
- `Home.jsx`: Main page of the app.

### 🛠️ Backend

- `api.py`: FastAPI app for handling predictions.
- `api_config.py`: Configuration for the model, device, and preprocessing.

### 📜 Scripts

- `train.py`: Script for training the model.
- `evaluate.py`: Script for evaluating the model.
- `predict.py`: Script for making predictions on a single image.

---

## 🚀 Future Improvements

- **Model Optimization**: Improve the model's accuracy by using a larger dataset or advanced fine-tuning techniques.
- **Error Handling**: Add more robust error handling for file uploads and API requests.
- **Dockerization**: Create Docker containers for easier deployment.
- **Additional Features**: Include confidence scores and heatmaps for better interpretability.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 🙌 Acknowledgments

- 🧠 **PyTorch**: For providing the ResNet-50 model and training utilities.
- ⚡ **FastAPI**: For the lightweight and efficient backend framework.
- 🎨 **React**: For the modern and responsive frontend framework.
- 💡 **TailwindCSS**: For the beautiful and customizable UI components.

---

Feel free to reach out if you have any questions or suggestions! 😊
