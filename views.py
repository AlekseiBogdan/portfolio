from flask_admin.contrib.sqla import ModelView


class FeedbackAdmin(ModelView):
    column_list = ('name', 'contacts', 'suggestions', 'date')
    column_labels = {'name': 'Кто', 'contacts': 'Как', 'suggestions': 'Что', 'date': 'Когда'}
    column_filters = ('name', 'date')