class Matemagica{
    private a: number
    private b: number
    
    public SetA(number: number){
        this.a = number
    }

    public SetB(number: number){
        this.b = number
    }

    private Sum(){
        return this.a + this.b
    }

    public GetSum(){
        return this.Sum()
    }

    private Sub(){
        return this.a - this.b
    }

    public GetSub(){
        return this.Sub()
    }

    private Div(){
        return this.a/ this.b
    }

    public GetDiv(){
        return this.Div()
    }

    private Mul(){
        return this.a * this.b
    }

    public GetMul(){
        return this.Mul()
    }
}

export default Matemagica