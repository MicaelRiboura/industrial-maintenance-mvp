from category_encoders.one_hot import OneHotEncoder

class PreProcessor:
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
