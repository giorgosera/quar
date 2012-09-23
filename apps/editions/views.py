# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from editions.models import Edition

def index(request):
    all_editions = Edition.objects.all().order_by('-created_date')[:5]
    return render_to_response('editions/index.html', {'all_editions': all_editions})

def generate(request, edition_id):
	return render_to_response('editions/generate.html', {'edition': edition_id})
