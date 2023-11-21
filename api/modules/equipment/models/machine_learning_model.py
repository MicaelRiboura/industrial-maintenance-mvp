import numpy as np
import pickle
import joblib
from sklearn.preprocessing import MinMaxScaler

class Model:
    def load_model(path):
        """Dependendo se o final for .pkl ou .joblib, carregamos de uma forma ou de outra
        """
        
        if path.endswith('.pkl'):
            model = pickle.load(open(path, 'rb'))
        elif path.endswith('.joblib'):
            model = joblib.load(path)
        else:
            raise Exception('Formato de arquivo não suportado')
        return model
    
    def predictor(model, form):
        """Realiza a predição de um equipamento com base no modelo treinado
        """
        types = []
        if form.type == 'M':
            types = [1, 0, 0]
        elif form.type == 'L':
            types = [0, 1, 0]
        elif 'H':
            types = [0, 0, 1]

        X_input = np.array([
                            types[0],
                            types[1],
                            types[2],
                            form.air_temperature, 
                            form.process_temperature, 
                            form.rotation_speed, 
                            form.torque,
                            form.tool_wear,
                        ])
        print(X_input)


        # Create an instance of MinMaxScaler
        scaler = MinMaxScaler()

        scaled_data = scaler.fit_transform(X_input)

        print(scaled_data)

        # Faremos o reshape para que o modelo entenda que estamos passando
        diagnosis = model.predict(scaled_data.reshape(1, -1))
        return int(diagnosis[0])