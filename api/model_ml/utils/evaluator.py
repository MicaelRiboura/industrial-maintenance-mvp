from sklearn.metrics import accuracy_score, recall_score

class Evaluator:
    def calculate_accuracy_score(self, model, X, y):
        predictions = []
        for xi in X:
            predictions.append(model.predict(xi.reshape(1, -1)))
        return accuracy_score(y, predictions)


    def calculate_recall_score(self, model, X, y):
        predictions = []
        for xi in X:
            predictions.append(model.predict(xi.reshape(1, -1)))
        return recall_score(y, predictions)