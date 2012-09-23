from django.db import models

class Edition(models.Model):
	title = models.CharField(max_length=255)
	created_date = models.DateTimeField(auto_now_add=True)
	
	def __unicode__(self):
		return self.title

class Article(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=150)
    pub_date = models.DateTimeField()
    url = models.TextField()
    edition = models.ForeignKey(Edition)

    def __unicode__(self):
    	return self.title
