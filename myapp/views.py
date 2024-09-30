from django.shortcuts import render, redirect,HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

# Create your views here.
def login_user(request):
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			login(request, user)
			messages.success(request, ('You Have Been Logged In!'))
			return redirect('index')

		else:
			messages.success(request, ('Error Logging In - Please Try Again...'))
			return redirect('signin')
	else:
		return render(request, 'myapp/signin.html', {})

def create_user(request):
    if request.method == 'POST':
        check1 = False
        check2 = False
        check3 = False
        if 1==1:
            username = request.POST['username']
            password1 = request.POST['password1']
            password2 = request.POST['password2']
            email = request.POST['email']

            if password1 != password2:
                check1 = True
                messages.error(request, 'Password did not match!',
                               extra_tags='alert alert-warning alert-dismissible fade show')
            if User.objects.filter(username=username).exists():
                check2 = True
                messages.error(request, 'Username already exists!',
                               extra_tags='alert alert-warning alert-dismissible fade show')
            if User.objects.filter(email=email).exists():
                check3 = True
                messages.error(request, 'Email already registered!',
                               extra_tags='alert alert-warning alert-dismissible fade show')

            if check1 or check2 or check3:
                messages.error(
                    request, "Registration Failed!", extra_tags='alert alert-warning alert-dismissible fade show')
                return redirect('signup')
            else:
                user = User.objects.create_user(
                    username=username, password=password1, email=email)
                messages.success(
                    request, f'Thanks for registering {user.username}.', extra_tags='alert alert-success alert-dismissible fade show')
                return redirect('signin')
    return render(request, 'myapp/signup.html')


def logout_user(request):
    logout(request)
    return redirect('index')


def index(request):
	return render(request,'index.html')
def bengaluru(request):
	return render(request,'bengaluru.html')
def delhi(request):
	return render(request,'delhi.html')
def hyd(request):
	return render(request,'hyd.html')
def kol(request):
	return render(request,'kol.html')
def mumbai(request):
	return render(request,'mumbai.html')
