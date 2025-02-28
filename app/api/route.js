import { promises as fs } from 'fs';

export async function GET(req){
    const url = req.nextUrl.searchParams
    const action = url.get('a')
    const query = url.get('q')

    let res = {message: 'Invalid Request', products: []}

    if (action ==='list' && query === 'products' ){
        res = {
            message:'',
            products:[
                {"id":1,"title":"Essence Mascara Lash Princess","description":"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.","category":"beauty","price":9.99,"discountPercentage":7.17,"rating":4.94,"stock":5,"tags":["beauty","mascara"],"brand":"Essence","sku":"RCH45Q1A","weight":2,"dimensions":{"width":23.17,"height":14.43,"depth":28.01},"warrantyInformation":"1 month warranty","shippingInformation":"Ships in 1 month","availabilityStatus":"Low Stock","reviews":[{"rating":2,"comment":"Very unhappy with my purchase!","date":"2024-05-23T08:56:21.618Z","reviewerName":"John Doe","reviewerEmail":"john.doe@x.dummyjson.com"},{"rating":2,"comment":"Not as described!","date":"2024-05-23T08:56:21.618Z","reviewerName":"Nolan Gonzalez","reviewerEmail":"nolan.gonzalez@x.dummyjson.com"},{"rating":5,"comment":"Very satisfied!","date":"2024-05-23T08:56:21.618Z","reviewerName":"Scarlett Wright","reviewerEmail":"scarlett.wright@x.dummyjson.com"}],"returnPolicy":"30 days return policy","minimumOrderQuantity":24,"meta":{"createdAt":"2024-05-23T08:56:21.618Z","updatedAt":"2024-05-23T08:56:21.618Z","barcode":"9164035109868","qrCode":"https://assets.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"],"thumbnail":"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"},
                {"id":2,"title":"Eyeshadow Palette with Mirror","description":"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.","category":"beauty","price":19.99,"discountPercentage":5.5,"rating":3.28,"stock":44,"tags":["beauty","eyeshadow"],"brand":"Glamour Beauty","sku":"MVCFH27F","weight":3,"dimensions":{"width":12.42,"height":8.63,"depth":29.13},"warrantyInformation":"1 year warranty","shippingInformation":"Ships in 2 weeks","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Very satisfied!","date":"2024-05-23T08:56:21.618Z","reviewerName":"Liam Garcia","reviewerEmail":"liam.garcia@x.dummyjson.com"},{"rating":1,"comment":"Very disappointed!","date":"2024-05-23T08:56:21.618Z","reviewerName":"Nora Russell","reviewerEmail":"nora.russell@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2024-05-23T08:56:21.618Z","reviewerName":"Elena Baker","reviewerEmail":"elena.baker@x.dummyjson.com"}],"returnPolicy":"30 days return policy","minimumOrderQuantity":32,"meta":{"createdAt":"2024-05-23T08:56:21.618Z","updatedAt":"2024-05-23T08:56:21.618Z","barcode":"2817839095220","qrCode":"https://assets.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"],"thumbnail":"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"},
                {"id":3,"title":"Powder Canister","description":"The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.","category":"beauty","price":14.99,"discountPercentage":18.14,"rating":3.82,"stock":59,"tags":["beauty","face powder"],"brand":"Velvet Touch","sku":"9EN8WLT2","weight":8,"dimensions":{"width":24.16,"height":10.7,"depth":11.07},"warrantyInformation":"2 year warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Very happy with my purchase!","date":"2024-05-23T08:56:21.618Z","reviewerName":"Ethan Thompson","reviewerEmail":"ethan.thompson@x.dummyjson.com"},{"rating":4,"comment":"Great value for money!","date":"2024-05-23T08:56:21.618Z","reviewerName":"Levi Hicks","reviewerEmail":"levi.hicks@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2024-05-23T08:56:21.618Z","reviewerName":"Hazel Gardner","reviewerEmail":"hazel.gardner@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":25,"meta":{"createdAt":"2024-05-23T08:56:21.618Z","updatedAt":"2024-05-23T08:56:21.618Z","barcode":"0516267971277","qrCode":"https://assets.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"],"thumbnail":"https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"},
            ]
        }
    } else if (action ==='list' && query === 'students' ){
        /* step 1
        res = {
            message:'',
            "student":[
            {"id":1,"fn":"Al","ln":"Adams","dob":"2020-01-01","grd":91},
            {"id":2,"fn":"Bo","ln":"Bennett","dob":"2020-01-02","grd":92},
            {"id":3,"fn":"Cy","ln":"Carter","dob":"2020-01-03","grd":93},
            {"id":4,"fn":"Dan","ln":"Dawson","dob":"2020-01-04","grd":94},
            {"id":5,"fn":"Ed","ln":"Evans","dob":"2020-01-05","grd":95}
            ]
        }
        */
        //* step 2
        let file = await fs.readFile(process.cwd() + '/res/dat.json', 'utf8');
        res = JSON.parse(file);
        // */
        /* step 3
        res = jsonDAO.getAll()
        // */
    }
    
    return Response.json(res)
}

export async function POST(req){
    const url = req.nextUrl.searchParams
    const action = url.get('a')
    const query = url.get('q')

    let res = {message: 'Invalid Request'}

    if (action ==='add' && query === 'students' ){
        const dat = await req.formData()

        const fn = dat.get('fn')
        const ln = dat.get('ln')
        const dob = dat.get('dob')
        const grd = dat.get('grd')

        if (!fn || !ln || !dob || !grd){
            res = {message: 'Error!'}
            console.log('===> Err: ', fn, ln, dob, grd);
        }else if(!isVldStr(fn)) {
            res = {message: 'Sever side check First Name format: Failed!'}
        }else if(!isVldStr(ln)) {
            res = {message: 'Sever side check Last Name format: Failed!'}
        }else if(!isVldGrd(grd)) {
            res = {message: 'Sever side check Grade format: Failed!'}
        }else if(!isVldDob(dob)) {
            res = {message: 'Sever side check Date of Birth format: Failed!'}
        }else{
            console.log('===> OK: ', fn, ln, dob, grd);
        
            let file = await fs.readFile(process.cwd() + '/res/dat.json', 'utf8');
            let elements = JSON.parse(file);

            let f1 = elements.student.filter(x => x.fn === fn && x.ln === ln && x.dob === dob).length || 0
            
            // console.log(elements)
            console.log('===> find ID: [' + f1 + ']')

            if (f1 === 0){
                let newStudent = {}

                // generate new id
                newStudent.id = elements.student.length ? Math.max(...elements.student.map(x => x.id)) + 1 : 1;
                newStudent.fn = fn
                newStudent.ln = ln
                newStudent.dob = dob
                newStudent.grd = grd
    
                // add and save element
                elements.student.push(newStudent);
                
                fs.writeFile(process.cwd() + '/res/dat.json', JSON.stringify(elements, null, 4));
                res = {message: 'Saved!'}
            }else{
                res = {message: 'Already in database!'}
            }
        }
        return Response.json(res)
    }
}


const isVldStr = (_str) => {
    if (_str){
        if (_str.length >= 3 && _str.length <= 10){
            return true
        }
    }
    return false
}

const isVldGrd = (_grd) => {
    if (_grd){
        if (_grd => 0 && _grd <= 100){
            return true
        }
    }
    return false
}

const isVldDob = (_dob) => {
    if (_dob){
        return !isNaN(Date.parse(_dob));
    }
    return false
}