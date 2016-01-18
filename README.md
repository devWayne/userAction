userAction
============
> Record user action in localstorge

## Usage

```
var userAction = require('userAction');
userAction(1,'someaction',function(){
    alert('this will only alert once a day!');
})
```

## API

#### userAction(days,actionName,callback);
