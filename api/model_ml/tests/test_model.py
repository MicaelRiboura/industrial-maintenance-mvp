import pickle

from model_ml.utils import DatasetLoader, Evaluator

class TestMachineLearning():
    def test_model_ml_accuracy(self):  
        ml_path = 'model_ml/model.pkl'
        ml_model = pickle.load(open(ml_path, 'rb'))

        dataset_loader = DatasetLoader()
        loaded_dataset = dataset_loader.load_dataset(url='model_ml/dataset/predictive_maintenance.csv')
        prepared_dataset = dataset_loader.pre_process(dataset=loaded_dataset)
        X, y = dataset_loader.divide_IO(dataset=prepared_dataset)
        
        evaluator = Evaluator()
        accuracy_score = evaluator.calculate_accuracy_score(model=ml_model, X=X, y=y)
        print(accuracy_score)
        
        assert accuracy_score >= 0.80
    
    def test_model_ml_recall(self):  
        ml_path = 'model_ml/model.pkl'
        ml_model = pickle.load(open(ml_path, 'rb'))

        dataset_loader = DatasetLoader()
        loaded_dataset = dataset_loader.load_dataset(url=ml_path)
        prepared_dataset = dataset_loader.pre_process(dataset=loaded_dataset)
        X, y = dataset_loader.divide_IO(dataset=prepared_dataset)
        
        evaluator = Evaluator()
        recall_score = evaluator.calculate_recall_score(model=ml_model, X=X, y=y)
        print(recall_score)

        assert recall_score >= 0.80