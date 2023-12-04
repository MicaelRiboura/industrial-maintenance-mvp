import pandas as pd
from category_encoders.one_hot import OneHotEncoder
from sklearn.model_selection import train_test_split

class DatasetLoader:
    def load_dataset(self, url):
        url = "https://raw.githubusercontent.com/MicaelRiboura/industrial-maintenance-mvp/main/api/model_ml/dataset/predictive_maintenance.csv"
        # Lê o arquivo
        dataset = pd.read_csv(url, delimiter=',')

        return dataset

    def pre_process(self, dataset):
        one_hot_enc = OneHotEncoder(cols=['Type'])
        prepared_dataset = one_hot_enc.fit_transform(dataset)
        prepared_dataset = prepared_dataset.drop('UDI', axis=1)
        prepared_dataset = prepared_dataset.drop('Product ID', axis=1)
        prepared_dataset = prepared_dataset.drop('Failure Type', axis=1)
        return prepared_dataset


    def divide_IO(self, dataset):
        array = dataset.values
        X = array[:, 0:8]
        y = array[:,8]
        
        return X, y

    def prepare_holdout(self, dataset):
        test_size = 0.20 # tamanho do conjunto de teste
        seed = 7 # semente aleatória

        # Separação em conjuntos de treino e teste
        X, y = self.divide_IO(dataset)

        X_train, X_test, y_train, y_test = train_test_split(X, y,
            test_size=test_size, shuffle=True, random_state=seed, stratify=y) # holdout com estratificação
        
        return X_train, X_test, y_train, y_test