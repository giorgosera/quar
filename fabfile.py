###################################
# Fab file to deploy these app    #
# to various servers.             #
# Author: Giorgos Eracleous       #
###################################

import os
from fabric.api import *
from fabric.colors import green

####################
# PROCESS COMMANDS #
####################

def start():
    '''
    Starts the server.
    '''
    local("python manage.py runserver")
    print(green("Server started!"))
