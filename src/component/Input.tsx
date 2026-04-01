
export const Input = () => {
    return (
        <form>
            <input  value="1" name="aname" type="number" placeholder="Input A" required/>
            <input  value="-6" name="bname" type="number" placeholder="Input B" required/>
            <input  value="11" name="cname" type="number" placeholder="Input C" required/>
            <input  value="-6" name="dname" type="number" placeholder="Input D" required/>
            <input type="submit" value="Calculate"/>
        </form>
    )
    }