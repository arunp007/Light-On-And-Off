from django.shortcuts import render

def light(request):
    return render(request, 'light.html')
