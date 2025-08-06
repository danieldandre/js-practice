## Python

Hello! Welcome to our Python sidequest. 
During this Python exercise we're going to learn how to setup our Python environment and do a few fun little exercises with code. 

-----

### Environments

1 - Let's start by understanding which version of Python you have available in your machine. Which command do you use on your terminal/powershell to view which version of Python you have?

    A: python --version

2 - Cool. Now under week4/python (so js-practice/week4/python) you're going to setup a virtual environment using ![venv](https://docs.python.org/3/library/venv.html)

Which command did you use to create your virtual environment? Which command do you use to initialise the environment? Which one to deactivate it? 

    Create: python -m venv name_of_environment

    Initialise: name_of_environment\Scripts\activate

    Deactivate: deactivate

3 - Awesome! Now within your initialise environment, use pip to install Numpy and the Pandas library. Which command did you use? 

    A: pip isntall numpy pandas

4 - Now verify which pandas and which numpy versions you have (using the terminal). You can either do this by: 
- Initialising the Python terminal (usually typing python or python3), importing numpy and pandas and googling how to check which version, or;
- Listing the installed packages of pip3 on your virtual environment (venv)

Which one did you use, and which versions do you have? Which commands did you use? 

    A: 

    for the first one:
    ```
    import pandas
    import numpy

    print(numpy.__version__)
    print(pandas.__version__)
    ```
    second method:

    pip list

5 - Fantastic. venv is a great, but you'll want something even better. You're going to install `pyenv` and `virtualenv` (`pyenv-virtualenv`). The benefit of these two packages is that you can also manage the global Python version you're using in your machine easily, while also being able to set different Python versions for local environments (easily as well).

Install `pyenv` and `pyenv-virtualenv`. After having them successfully installed, check which versions you have. Which command did you use? 

    A: Too many

6 - Let's start by setting up your global Python environment. Do `python versions` to view your versions of Python and local environments you have setup. Now install a new version of Python (tip: via pyenv, check Python versions online).

Which Python versions do you now have installed, and which one is active? 

    A: 3.12.10(active) and 3.13.5

Now install version 3.11.12 (if you don't already have it). Set it as your global python version (tip: also via pyenv). When running `python3 --version` is it correctly appearing as 3.11.12? (Note: If it's not, you may have to do some troubleshooting)

7 - Now let's create a pyenv virtualenv and call it python-exercises. Which command did you use? When you use `pyenv versions`, does your pyenv-virtualenv name appear? 

    A: no

8 - Now delete your venv, the one you created in exercise 2. Instead, use `pyenv local ...` to set your local environment under the same path. Make sure it's activated. Now reinstall Numpy and Pandas. 

9 - Cool! Now you should be able to run Python code in your environment. Find a way of installing Jupyter Notebook (globally, not locally) and then launch exercises.ipynb from your local environment. You will find some Numpy exercises attached. 

Note: The ![following docs](https://numpy.org/doc/2.3/user/basics.creation.html) might be useful to learn about Numpy.

10 - Awesome. Now figure out a way of setting up a Docker environment to run Python code **interactively**. You'll want to build your image and then start it, and run commands from within that Docker container. Choose an image from ![here](https://hub.docker.com/_/python)

------

### Minigame

Build a two‑player console game where players take turns placing X and O on a 3×3 board until someone wins or it’s a draw.
Create a separate python3 file called "minigame.py". You may use a Jupyter Notebook to run code more interactively, or simply run your minigame.py using python3 (`python3 minigame.py`)

#### Requirements

**Gameplay**
- Ask who goes first (X or O); default to X on Enter.
- Show an empty board at start and print the board after every valid move.
- Prompt on each turn: Player X, choose a position (1-9):
- Alternate turns automatically (X → O → X …).

**Input Validation**
- Accept only integers 1–9.
- Reject non‑numbers, out‑of‑range values, and occupied squares.
- On invalid input, print a helpful message and re‑prompt without crashing.

**Win/Draw**
- Detect wins across rows, columns, diagonals (8 lines total).
- Announce Player X wins! or It's a draw. and end the round.

**Replay & Exit**
- Ask Play again? (y/n):
- y restarts with a fresh board and first‑player prompt.
- n exits

**Visual Display**

```
Positions:        Example:
 1 | 2 | 3         X | O | 3
---+---+---       ---+---+---
 4 | 5 | 6         4 | X | 6
---+---+---       ---+---+---
 7 | 8 | 9         7 | 8 | O
```

**Suggested Structure (functions)**
- create_board() -> list
- print_board(board) -> None
- is_valid_move(board, pos) -> bool
- place_mark(board, pos, mark) -> None
- has_winner(board, mark) -> bool
- is_draw(board) -> bool
- switch_player(mark) -> str
- prompt_first_player() -> str
- prompt_move(board, mark) -> int
- play_game() -> None

Hint: Predefine win lines
`win_lines = [(0,1,2),(3,4,5),(6,7,8),(0,3,6),(1,4,7),(2,5,8),(0,4,8),(2,4,6)]`