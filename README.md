# ng2-checklist

A very simple checklist directive to get a set of checkboxes to map to an array of strings.  
Inspired by Angular 1's https://github.com/vitalets/checklist-model  

## Installation
```
npm install ng2-checklist
```

## Usage
Import the directive
```
import { ChecklistDirective } from 'ng2-checklist';
```
Then specify `ChecklistDirective` in your component's directives array:
```
@Component({
  ...
  directives: [  
    ...,
    ChecklistDirective
  ],
  ...
})
```  

To get an array of strings add the `[checklist]` attribute to a checkbox input element instead of `[(ngModel)]`. The `value` will then be added to the array specified in `[checklist]`
```
<input type="checkbox" [checklist]="roles" value = "admin">
<input type="checkbox" [checklist]="roles" value = "user">
```
If both of these checkboxes are checked, the `roles` array will be `roles = ['admin', 'user']`

Using checkall input with `value` is `all`
```html
<input type="checkbox" [checklist]="roles" value = "all">
<input type="checkbox" [checklist]="roles" value = "admin">
<input type="checkbox" [checklist]="roles" value = "user">
```

Using multiple checkall input with `name` of `field`

Group by `roles`
```html
<input type="checkbox" name="roles" [checklist]="roles" value = "all">
<input type="checkbox" name="roles" [checklist]="roles" value = "admin">
<input type="checkbox" name="roles" [checklist]="roles" value = "user">
```
Group by `types`
```html
<input type="checkbox" name="types" [checklist]="types" value = "all">
<input type="checkbox" name="types" [checklist]="types" value = "admin">
<input type="checkbox" name="types" [checklist]="types" value = "user">
```

## Future Development
- Make tests
- Be able to handle non-string values (other arrays, objects, etc.)
- Make compatible with angular-cli
