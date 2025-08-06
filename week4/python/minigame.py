import numpy as np
import time

def create_board():
    return np.arange(1, 10).astype(str)

def print_board(board):
    print(f"\n\033[32m {board[0]} | {board[1]} | {board[2]}")
    print("---+---+---")
    print(f" {board[3]} | {board[4]} | {board[5]}")
    print("---+---+---")
    print(f" {board[6]} | {board[7]} | {board[8]}\n \033[0m")

def is_valid_move(board, pos):
    if pos >= 1 and pos <= 9 and board[pos - 1] != 'X' and board[pos - 1] != 'O' :
        return True
    else : 
        return False

def place_mark(board, pos, mark):
    board[pos - 1] = mark

def has_winner(board, mark):
    ### Horizontal
    if board[3] == mark and board[4] == mark and board[5] == mark: return True
    if board[0] == mark and board[1] == mark and board[2] == mark: return True
    if board[6] == mark and board[7] == mark and board[8] == mark: return True
    ### Vertical
    if board[0] == mark and board[3] == mark and board[6] == mark: return True
    if board[1] == mark and board[4] == mark and board[7] == mark: return True
    if board[2] == mark and board[5] == mark and board[8] == mark: return True
    ### Diagonals
    if board[0] == mark and board[4] == mark and board[8] == mark: return True
    if board[2] == mark and board[4] == mark and board[6] == mark: return True

    return False

def is_draw(board):
    for i in board:
        if i.isdigit(): return False
    return True

def switch_player(mark):
    if mark == 'X':
        return 'O'
    else:
        return 'X'

def prompt_first_player():
    first = input("First player: X or O? (Default: X): ")
    if first == '': 
        return 'X'
    if first in ['X', 'O']: 
        return first
    print("retard alert")
    time.sleep(2)
    return prompt_first_player()

def prompt_move(board, mark):
    while True:
        move = input(f"Player {mark} turn. Choose position (1-9).")
        if move.isdigit():
            pos = int(move)
            if is_valid_move(board, pos):
                return pos
            else:
                print("retard alert")
                time.sleep(1)
        else:
            print("reatrd alert")
            time.sleep(1)
            
def play_game():
    board = create_board()
    current = prompt_first_player()

    print("Game Start!")
    print_board(board)

    while True:
        pos = prompt_move(board, current)

        place_mark(board, pos, current)
        print_board(board)

        if has_winner(board, current):
            print(f"Player {current} won!\n")
            time.sleep(2)
            break
        if is_draw(board):
            print("Draw!")
            break
        current = switch_player(current)

    again = input("Play again? (y/n)").strip().lower()
    if again == 'y':
        play_game()
    else:
        print('Goodbye!')

play_game()