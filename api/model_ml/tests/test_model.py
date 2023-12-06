import pickle

from model_ml.utils import DatasetLoader, PreProcessor, Evaluator

class TestMachineLearningModel():
    def test_model_ml_accuracy(self):  
        ml_path = 'model_ml/model.pkl'
        ml_model = pickle.load(open(ml_path, 'rb'))

        dataset_loader = DatasetLoader()
        loaded_dataset = dataset_loader.load_dataset(url='model_ml/dataset/maintenance_golden.csv')

        pre_processor = PreProcessor()
        prepared_dataset = pre_processor.pre_process(dataset=loaded_dataset)
        X, y = pre_processor.divide_IO(dataset=prepared_dataset)
        
        evaluator = Evaluator()
        accuracy_score = evaluator.calculate_accuracy_score(model=ml_model, X=X, y=y)
        print(accuracy_score)
        
        assert accuracy_score >= 0.85
        assert accuracy_score < 0.99
    
    def test_model_ml_recall(self):  
        ml_path = 'model_ml/model.pkl'
        ml_model = pickle.load(open(ml_path, 'rb'))

        dataset_loader = DatasetLoader()
        loaded_dataset = dataset_loader.load_dataset(url=ml_path)

        pre_processor = PreProcessor()
        prepared_dataset = pre_processor.pre_process(dataset=loaded_dataset)
        X, y = pre_processor.divide_IO(dataset=prepared_dataset)
        
        evaluator = Evaluator()
        recall_score = evaluator.calculate_recall_score(model=ml_model, X=X, y=y)
        print(recall_score)

        assert recall_score >= 0.85
        assert recall_score < 0.99