class GremlinsController < ApplicationController
  before_action :set_gremlin, only: [:show, :update, :destroy]

  # GET /gremlins
  def index
    @gremlins = Gremlin.all

    render json: @gremlins
  end

  # GET /gremlins/1
  def show
    render json: @gremlin
  end

  # POST /gremlins
  def create
    @gremlin = Gremlin.new(gremlin_params)

    if @gremlin.save
      render json: @gremlin, status: :created, location: @gremlin
    else
      render json: @gremlin.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gremlins/1
  def update
    if @gremlin.update(gremlin_params)
      render json: @gremlin
    else
      render json: @gremlin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gremlins/1
  def destroy
    @gremlin.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gremlin
      @gremlin = Gremlin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def gremlin_params
      params.require(:gremlin).permit(:name, :species, :color, :earType, :tailType, :eyeColor, :satisfaction, :hunger)
    end
end
