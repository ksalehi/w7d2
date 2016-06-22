class Api::TodosController < ApplicationController

  def new
    @todo = Todo.new(todo_params)
    render json: @todo
  end

  def create
    @todo = Todo.create!(todo_params)
    render json: @todo
  end

  def edit
    @todo = Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def destroy
      @todo = Todo.find(params[:id])
      @todo.destroy!
  end

  def show
      @todo = Todo.find(params[:id])
      render json: @todo
  end

  def index
    render json: Todo.all
  end

  def todo_params
    params.require(:todo).permit(:title, :body)
  end

end
