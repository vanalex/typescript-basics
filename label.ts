interface LabeledValue{
    label: string;
}

function printLabel(labeledObj: LabeledValue){
    console.log(labeledObj.label);
}

let myObj: LabeledValue = { label: "Size 10 Object" };
printLabel(myObj);