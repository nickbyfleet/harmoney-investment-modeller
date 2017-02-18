class LoansController < ApplicationController
  before_action :set_loan, only: [:show, :update, :destroy]

  # GET /loans
  def index
    if (params[:project_id])
      @loans = Project.find(params[:project_id]).loans
    else
      @loans = Loan.all
    end

    render json: @loans
  end

  # GET /loans/1
  def show
    render json: @loan
  end

  # POST /loans
  def create
    @loan = Loan.new(loan_params)

    if @loan.save
      render json: @loan, status: :created, location: @loan
    else
      render json: @loan.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /loans/1
  def update
    if @loan.update(loan_params)
      render json: @loan
    else
      render json: @loan.errors, status: :unprocessable_entity
    end
  end

  # DELETE /loans/1
  def destroy
    @loan.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_loan
      if (params[:project_id])
        @loan = Project.find(params[:project_id]).loans
      else
        @loan = Loan.find(params[:id])
      end
    end

    # Only allow a trusted parameter "white list" through.
    def loan_params
      params.require(:loan).permit(:name, :amount, :rate, :project_id)
    end
end
