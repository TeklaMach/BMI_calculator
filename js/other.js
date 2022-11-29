var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// calculation

	if(option_from === "meter" && option_to==="kilometer"){
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "meter" && option_to==="centimeter"){
		result.value = Number(input.value) * 100;
	}else if(option_from === "meter" && option_to==="meter"){
		result.value = input.value
	}else if(option_from === "meter" && option_to==="milimeter"){
		result.value = Number(input.value) * 1000;
    }else if(option_from === "meter" && option_to==="micrometer"){
		result.value = Number(input.value) * 1000000;
    }else if(option_from === "meter" && option_to==="nanometer"){
		result.value = Number(input.value) * 1000000000;
    }else if(option_from === "meter" && option_to==="mile"){		
		result.value = Number(input.value) * 0.0006213689;
    }else if(option_from === "meter" && option_to==="yard"){		
		result.value = Number(input.value) * 1.0936132983;
    }else if(option_from === "meter" && option_to==="foot"){		
		result.value = Number(input.value) * 3.280839895;
    }else if(option_from === "meter" && option_to==="inch"){		
		result.value = Number(input.value) * 39.37007874;
    }else if(option_from === "meter" && option_to==="light year"){		
		result.value = Number(input.value) * 1.057008707E-16;
    }

	if(option_from === "kilometer" && option_to==="meter"){
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="centimeter"){
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="kilometer"){		
		result.value = input.value
	}else if(option_from === "kilometer" && option_to==="milimeter"){		
		result.value = Number(input.value) * 1000000;
    }else if(option_from === "kilometer" && option_to==="micrometer"){		
		result.value = Number(input.value) * 1000000000;
    }else if(option_from === "kilometer" && option_to==="nanometer"){		
		result.value = Number(input.value) * 1000000000000;
    }else if(option_from === "kilometer" && option_to==="mile"){		
		result.value = Number(input.value) * 0.6213688756;
    }else if(option_from === "kilometer" && option_to==="yard"){		
		result.value = Number(input.value) * 1093.6132983;
    }else if(option_from === "kilometer" && option_to==="foot"){		
		result.value = Number(input.value) * 3280.839895;
    }else if(option_from === "kilometer" && option_to==="inch"){		
		result.value = Number(input.value) * 39370.07874;
    }else if(option_from === "kilometer" && option_to==="light year"){		
		result.value = Number(input.value) * 1.057008707E-13;
    }

	if(option_from === "centimeter" && option_to==="kilometer"){
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "centimeter" && option_to==="meter"){		 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "centimeter" && option_to==="centimeter"){
		result.value = input.value
	}else if(option_from === "centimeter" && option_to==="milimeter"){
		result.value = Number(input.value) * 10;
    }else if(option_from === "centimeter" && option_to==="micrometer"){
		result.value = Number(input.value) * 10000;
    }else if(option_from === "centimeter" && option_to==="nanometer"){		
		result.value = Number(input.value) * 10000000;
    }else if(option_from === "centimeter" && option_to==="mile"){		
		result.value = Number(input.value) * 0.0000062137;
    }else if(option_from === "centimeter" && option_to==="yard"){		
		result.value = Number(input.value) * 0.010936133;
    }else if(option_from === "centimeter" && option_to==="foot"){		
		result.value = Number(input.value) * 0.032808399;
    }else if(option_from === "centimeter" && option_to==="inch"){		
		result.value = Number(input.value) * 0.3937007874;
    }else if(option_from === "centimeter" && option_to==="light year"){		
		result.value = Number(input.value) * 1.057008707E-18;
    }
       
    if(option_from === "milimeter" && option_to==="kilometer"){        
        result.value = Number(input.value) * 0.000001;
    }else if(option_from === "milimeter" && option_to==="meter"){        
        result.value = Number(input.value) * 0.001;
    }else if(option_from === "milimeter" && option_to==="milimeter"){
        result.value = input.value
    }else if(option_from === "milimeter" && option_to==="centimeter"){
        result.value = Number(input.value) * 0.1;
    }else if(option_from === "milimeter" && option_to==="micrometer"){
        result.value = Number(input.value) * 1000;
    }else if(option_from === "milimeter" && option_to==="nanometer"){		
		result.value = Number(input.value) * 1000000;
    }else if(option_from === "milimeter" && option_to==="mile"){		
		result.value = Number(input.value) * 6.213688756E-7;
    }else if(option_from === "milimeter" && option_to==="yard"){		
		result.value = Number(input.value) * 0.0010936133;
    }else if(option_from === "milimeter" && option_to==="foot"){		
		result.value = Number(input.value) * 0.0032808399;
    }else if(option_from === "milimeter" && option_to==="inch"){		
		result.value = Number(input.value) * 0.0393700787;
    }else if(option_from === "milimeter" && option_to==="light year"){		
		result.value = Number(input.value) * 1.057008707E-19;
    }

    if(option_from === "micrometer" && option_to==="kilometer"){         
        result.value = Number(input.value) * 9.999999999E-10;
    }else if(option_from === "micrometer" && option_to==="meter"){         
        result.value = Number(input.value) * 0.000001;
    }else if(option_from === "micrometer" && option_to==="milimeter"){
        result.value = Number(input.value) * 0.001;
    }else if(option_from === "micrometer" && option_to==="centimeter"){
        result.value = Number(input.value) * 0.0001;
    }else if(option_from === "micrometer" && option_to==="micrometer"){
        result.value = input.value;
    }else if(option_from === "micrometer" && option_to==="nanometer"){		
		result.value = Number(input.value) * 1000;
    }else if(option_from === "micrometer" && option_to==="mile"){		
		result.value = Number(input.value) * 6.213688756E-10;
    }else if(option_from === "micrometer" && option_to==="yard"){		
		result.value = Number(input.value) * 0.0000010936;
    }else if(option_from === "micrometer" && option_to==="foot"){		
		result.value = Number(input.value) * 0.0000032808;
    }else if(option_from === "micrometer" && option_to==="inch"){		
		result.value = Number(input.value) * 0.0000393701;
    }else if(option_from === "micrometer" && option_to==="light year"){		
		result.value = Number(input.value) * 1.057008707E-22;
    }

    if(option_from === "nanometer" && option_to==="kilometer"){        
        result.value = Number(input.value) * 1.E-12;
    }else if(option_from === "nanometer" && option_to==="meter"){         
        result.value = Number(input.value) * 1.E-9;
    }else if(option_from === "nanometer" && option_to==="milimeter"){
        result.value = Number(input.value) * 0.000001;
    }else if(option_from === "nanometer" && option_to==="centimeter"){
        result.value = Number(input.value) * 1.E-7;
    }else if(option_from === "nanometer" && option_to==="micrometer"){
        result.value = Number(input.value) * 0.001;
    }else if(option_from === "nanometer" && option_to==="nanometer"){		
		result.value = input.value;
    }else if(option_from === "nanometer" && option_to==="mile"){		
		result.value = Number(input.value) * 6.213688756E-13;
    }else if(option_from === "nanometer" && option_to==="yard"){		
		result.value = Number(input.value) * 1.093613298E-9;
    }else if(option_from === "nanometer" && option_to==="foot"){		
		result.value = Number(input.value) * 3.280839895E-9;
    }else if(option_from === "nanometer" && option_to==="inch"){		
		result.value = Number(input.value) * 3.937007874E-8;
    }else if(option_from === "nanometer" && option_to==="light year"){		
		result.value = Number(input.value) * 1.057008707E-25;
    }

    if(option_from === "mile" && option_to==="kilometer"){        
        result.value = Number(input.value) * 1.60935;
    }else if(option_from === "mile" && option_to==="meter"){        
        result.value = Number(input.value) * 1609.35;
    }else if(option_from === "mile" && option_to==="milimeter"){
        result.value = Number(input.value) * 1609350;
    }else if(option_from === "mile" && option_to==="centimeter"){
        result.value = Number(input.value) * 160935;
    }else if(option_from === "mile" && option_to==="micrometer"){
        result.value = Number(input.value) * 1609350000;
    }else if(option_from === "mile" && option_to==="mile"){		
		result.value = input.value;
    }else if(option_from === "mile" && option_to==="nanometer"){		
		result.value = Number(input.value) * 1609350000000;
    }else if(option_from === "mile" && option_to==="yard"){		
		result.value = Number(input.value) * 1760.0065617;
    }else if(option_from === "mile" && option_to==="foot"){		
		result.value = Number(input.value) * 5280.019685;
    }else if(option_from === "mile" && option_to==="inch"){		
		result.value = Number(input.value) * 63360.23622;
    }else if(option_from === "mile" && option_to==="light year"){		
		result.value = Number(input.value) * 1.701096963E-13;
    }

    if(option_from === "yard" && option_to==="kilometer"){        
        result.value = Number(input.value) * 0.0009144;
    }else if(option_from === "yard" && option_to==="meter"){        
        result.value = Number(input.value) * 0.9144;
    }else if(option_from === "yard" && option_to==="milimeter"){
        result.value = Number(input.value) * 914.4;
    }else if(option_from === "yard" && option_to==="centimeter"){
        result.value = Number(input.value) * 91.44;
    }else if(option_from === "yard" && option_to==="micrometer"){
        result.value = Number(input.value) * 914400;
    }else if(option_from === "yard" && option_to==="yard"){		
		result.value = input.value;
    }else if(option_from === "yard" && option_to==="nanometer"){		
		result.value = Number(input.value) * 914400000;
    }else if(option_from === "yard" && option_to==="mile"){		
		result.value = Number(input.value) * 0.0005681797;
    }else if(option_from === "yard" && option_to==="foot"){		
		result.value = Number(input.value) * 3;
    }else if(option_from === "yard" && option_to==="inch"){		
		result.value = Number(input.value) * 36;
    }else if(option_from === "yard" && option_to==="light year"){		
		result.value = Number(input.value) * 9.665287622E-17;
    }

    if(option_from === "foot" && option_to==="kilometer"){         
        result.value = Number(input.value) * 0.0003048;
    }else if(option_from === "foot" && option_to==="meter"){         
        result.value = Number(input.value) * 0.3048;
    }else if(option_from === "foot" && option_to==="milimeter"){
        result.value = Number(input.value) * 304.8;
    }else if(option_from === "foot" && option_to==="centimeter"){
        result.value = Number(input.value) * 30.48;
    }else if(option_from === "foot" && option_to==="micrometer"){
        result.value = Number(input.value) * 304800;
    }else if(option_from === "foot" && option_to==="foot"){		
		result.value = input.value;
    }else if(option_from === "foot" && option_to==="nanometer"){		
		result.value = Number(input.value) * 304800000;
    }else if(option_from === "foot" && option_to==="mile"){		
		result.value = Number(input.value) * 0.0001893932;
    }else if(option_from === "foot" && option_to==="yard"){		
		result.value = Number(input.value) * 0.3333333333;
    }else if(option_from === "foot" && option_to==="inch"){		
		result.value = Number(input.value) * 12;
    }else if(option_from === "foot" && option_to==="ight year"){		
		result.value = Number(input.value) * 3.22176254E-17;
    }

    if(option_from === "inch" && option_to==="kilometer"){         
        result.value = Number(input.value) * 0.0000254;
    }else if(option_from === "inch" && option_to==="meter"){        
        result.value = Number(input.value) * 0.0254;
    }else if(option_from === "inch" && option_to==="milimeter"){
        result.value = Number(input.value) * 25.4;
    }else if(option_from === "inch" && option_to==="centimeter"){
        result.value = Number(input.value) * 2.54;
    }else if(option_from === "inch" && option_to==="micrometer"){
        result.value = Number(input.value) * 25400;
    }else if(option_from === "inch" && option_to==="inch"){		
		result.value = input.value;
    }else if(option_from === "inch" && option_to==="nanometer"){		
		result.value = Number(input.value) * 25400000;
    }else if(option_from === "inch" && option_to==="mile"){		
		result.value = Number(input.value) * 0.0000157828;
    }else if(option_from === "inch" && option_to==="yard"){		
		result.value = Number(input.value) * 0.0277777778;
    }else if(option_from === "inch" && option_to==="foot"){		
		result.value = Number(input.value) * 0.0833333333;
    }else if(option_from === "inch" && option_to==="light year"){		
		result.value = Number(input.value) * 2.684802117E-18;
    }

    if(option_from === "light year" && option_to==="kilometer"){         
        result.value = Number(input.value) * 94606600;
    }else if(option_from === "light year" && option_to==="meter"){        
        result.value = Number(input.value) * 946066000;
    }else if(option_from === "light year" && option_to==="milimeter"){
        result.value = Number(input.value) * 2946066000;
    }else if(option_from === "light year" && option_to==="centimeter"){
        result.value = Number(input.value) * 946066000;
    }else if(option_from === "light year" && option_to==="micrometer"){
        result.value = Number(input.value) * 9.46066E+21;
    }else if(option_from === "light year" && option_to==="light year"){		
		result.value = input.value;
    }else if(option_from === "light year" && option_to==="nanometer"){		
		result.value = Number(input.value) * 9.460659999E+24;
    }else if(option_from === "light year" && option_to==="mile"){		
		result.value = Number(input.value) * 5878559666946;
    }else if(option_from === "light year" && option_to==="yard"){		
		result.value = Number(input.value) * 10346303587051618;
    }else if(option_from === "light year" && option_to==="foot"){		
		result.value = Number(input.value) * 31038910761154856;
    }else if(option_from === "light year" && option_to==="inch"){		
		result.value = Number(input.value) * 3724669291338583;
    }
}