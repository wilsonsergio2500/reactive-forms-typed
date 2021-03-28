import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormTypeBuilder } from "./FormTypeBuilder.service";
import { FormControlOnErrorItemDirective } from "./directives/form-control-onerror.directive";
export class ReactiveFormsTyped {
}
ReactiveFormsTyped.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    FormControlOnErrorItemDirective
                ],
                exports: [
                    FormControlOnErrorItemDirective
                ],
                providers: [FormTypeBuilder],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RpdmVGb3Jtc1R5cGVkLk1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZWFjdGl2ZUZvcm1zVHlwZWQuTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFpQjlGLE1BQU0sT0FBTyxrQkFBa0I7OztZQWQ5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRTtvQkFDViwrQkFBK0I7aUJBQ2xDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCwrQkFBK0I7aUJBQ2xDO2dCQUNBLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1UeXBlQnVpbGRlciB9IGZyb20gXCIuL0Zvcm1UeXBlQnVpbGRlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sT25FcnJvckl0ZW1EaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2Zvcm0tY29udHJvbC1vbmVycm9yLmRpcmVjdGl2ZVwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgRm9ybUNvbnRyb2xPbkVycm9ySXRlbURpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgICBGb3JtQ29udHJvbE9uRXJyb3JJdGVtRGlyZWN0aXZlXHJcbiAgXSxcclxuICAgcHJvdmlkZXJzOiBbRm9ybVR5cGVCdWlsZGVyXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlYWN0aXZlRm9ybXNUeXBlZCB7IH1cclxuIl19