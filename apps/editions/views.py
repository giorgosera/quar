# Create your views here.
from django.http import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response
from editions.models import Edition

from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    all_editions = Edition.objects.all().order_by('-created_date')[:5]
    return render_to_response('editions/index.html', {'all_editions': all_editions}, context_instance=RequestContext(request))

@login_required
def generate(request, edition_id):
	edition = Edition.objects.get(id__exact=edition_id)
	return render_to_response('editions/generate.html', {'edition': edition}, context_instance=RequestContext(request))
