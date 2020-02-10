# Info for Practices:

## Practice 1:
## Practice 2:
## Practice 3:
```
crosstab
describe
quantile
IQR
groupby
```
## Practice 4 - charts:
```
histogram
boxplot
Scatterplot
Matrix plot
```
## Practice 5 - linear regression:
```
simple liner regression
multy-var liner regression
MSE
RMSE
R^2
```
## Practice 6 - linear regression:
```
Train Test Split
Polynomial regression
```
## Practice 7 - Logistic Regression:
```
pd.get_dummies()
pd.concat(initial Dataset, new_dummy var, new_dummy var, axis=1)

Confusion Matrix (https://towardsdatascience.com/understanding-confusion-matrix-a9ad42dcfd62)

classification_report (recall/f1/presicion) 

ROC
```

## Practice 8:
## Practice 9:
## Practice 10:




******************************************************************

## earthquakes (var) goes up:
```
Recall +
presicion -
```
## earthquakes (var) goes down:
```
Recall -
presicion +
```

## Information Gain (IG):

```
the addition of inforamtion of a feature on the target variable
```

## Random Forest:
```
leads to better model performance because it decreases the model’s variance, without increasing the bias
```

## Accuracy:
```
value of correct answers base on the whole model (correct and incorrect)
```
## Recall:
```
how much did i perdict out of all earthquakes that happend
(60 times out of 100 earthquakes)
```

## 𝜃0 == bias


## Scaling Methods: (best to worst)
```
1. quartile standartization - requeiers sort of the data to find median (effective only with lots of data)
2. Standartization
3. Normalization

The more the dataset is smaller, there is more impact on outliers.
The more the dataset is bigger, there is less impact on outliers.

example:
df_a: 1000 samples, 10 features
df_b: 100,000 samples, 100 features

df_a -> quartile standartization
df_b -> Standartization
```

## OverFitting:
```json
High Variance
Low Bias

Overfitting occurs when number of features is on the same order of magnitude of number of samples
Too many features to learn, but 
Too few examples to learn from

```

## UnderFitting:
```json
Low Variance
High Bias
```

## Decision Trees – Pros & Cons (DT):
```
Pros
Very illustrative & interpretable
One can easily understand the mechanics of the solution
Ranks saliency of features
Can be implemented with rules
Can be used for regression
Complex Decision Boundary
Cons
Overfitting
However, two extension of it is are two of the best classification algorithms nowadays, a.k.a. Random Forest & Boosted Trees

```

***************************************************
# lecterures:

https://drive.google.com/drive/u/0/folders/1QF5EsAOSKQNr1oumy93HCKspBTey5wAl

connect with mindad

1. map reduce
2. scaling techniques:
```
Standartization
Normalization
Min / Max
Quartile Standartization
```
3. feature space
4. Regression
5. Regression GD
6. Logistic Regression
7. L6-Classification-FeaturesSelection-DecisionTrees
```Entropy```
8. L8-Classification-OverFitting-Ensemble
9. L9-Evaluation:
```
K-fold cross validation = dividing dataset adn using test+train data to validate the model

confusion matrix (TP,TN...)

ROC Curve
```
10. Clustering
```
K-Means clustering

Pros
Extremely simple algorithm
Relatively efficient – complexity O(n)
Has an objective function to optimize. 
However, often it terminates at a local optimum. The global optimum may be found using techniques such as simulated annealing and genetic algorithms
Cons
Need to specify k, the number of clusters, in advance
Trouble with noisy data and outliers
Not suitable to discover clusters with non-convex data
Can’t visualize for dimensions > 2


Hierarchical clustering

Pros
Do not have to assume any particular number of clusters 
Just cut the tree
Hierarchy is important for some apps
In contrast to K-Means, can be nicely visualized, independent of  dimensionality
Cons
Complexity: 
Space - O(N2) – distance matrix
Time – O(N3) – Merge all points – each time update dist. Matrix
Difficulty in handling different size of clusters

```

***************************************************
# Tests:

## 2016:
```
1. ROC שאלת בסיס
2. map - reduce גורם ראשוני
3. ראש-צורה 
יתרון\חסרון בהוספת פיצ'רים 
IG תרגיל בסיסי
4. DT, RF
חסרון של DT ואיך RF פותר
5. תרגיל חישוב של
Normaliztion
Standartization
Quarttile Standartization


````

## 2017:
```
1. outliers
למה לחריגים יש אפקט מוגבר ברגרסיה

2. ציור של קליסיפייר והתאמה של 
TP, NP ...

בניית מודל OUTBRAIN

3. test + train graph and their differnces

```

## 2018:
```
1. Overfitting עפ"י תוצאות של מבחני הסמפלים

2. תחזיות רעידת אדמה

3. IG - Entropy

4. השלמת נתונים שכר
טיוב 
Hierarchjical Clustering
Dendogram

```

## 2019
```
1. תרשים זרימה

2. Logistic Regression
חישוב תוצאת מסווג (0\1)

3. סביבון

4. שני DF

5. ML - גרף להשלים

```
