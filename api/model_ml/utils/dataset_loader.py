import pandas as pd

class DatasetLoader:
    def load_dataset(self, url):
        url = "https://raw.githubusercontent.com/MicaelRiboura/industrial-maintenance-mvp/main/api/model_ml/dataset/predictive_maintenance.csv"
        # Lê o arquivo
        dataset = pd.read_csv(url, delimiter=',')

        return dataset
