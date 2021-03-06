import { delay, tap } from "rxjs/operators";
// @dynamic
export class FormExtendedMethods {
}
FormExtendedMethods.onInit = function () {
    this.__submitted = false;
    this.__subscriptions = [];
};
FormExtendedMethods.setErrors = function (config) {
    this.__errors = Object.assign({}, config);
};
FormExtendedMethods.setFormErrors = function (config) {
    this.__contractErrors = Object.assign({}, config);
};
FormExtendedMethods.setFormControlErrors = function (key, config) {
    if (!!this.__contractErrors) {
        this.__contractErrors = Object.assign({}, this.__contractErrors);
        this.__contractErrors[key] = config;
    }
    else {
        this.__contractErrors = {};
        this.__contractErrors[key] = config;
    }
};
FormExtendedMethods.markAsSubmitted = function () {
    this.__submitted = true;
};
FormExtendedMethods.isSubmitted = function () {
    return this.__submitted;
};
FormExtendedMethods.addFormControlValidityTracker = function (from, to) {
    const form = this;
    const sub$ = form.controls[from].valueChanges.pipe(delay(1), tap(_ => form.controls[to].updateValueAndValidity()));
    this.__subscriptions = [...this.__subscriptions, sub$.subscribe()];
};
FormExtendedMethods.unsubscribeValidityTackers = function () {
    if (this.__subscriptions) {
        this.__subscriptions.forEach(sub => sub.unsubscribe());
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVR5cGVCdWlsZGVyLmV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRm9ybVR5cGVCdWlsZGVyLmV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVM1QyxXQUFXO0FBQ1gsTUFBTSxPQUFPLG1CQUFtQjs7QUFFZCwwQkFBTSxHQUFHO0lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQzlCLENBQUMsQ0FBQTtBQUVhLDZCQUFTLEdBQUcsVUFBVSxNQUFXO0lBQzNDLElBQUksQ0FBQyxRQUFRLHFCQUFRLE1BQU0sQ0FBRSxDQUFDO0FBQ2xDLENBQUMsQ0FBQTtBQUVhLGlDQUFhLEdBQUcsVUFBVSxNQUFXO0lBQy9DLElBQUksQ0FBQyxnQkFBZ0IscUJBQVEsTUFBTSxDQUFFLENBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBRVksd0NBQW9CLEdBQUcsVUFBVSxHQUFXLEVBQUUsTUFBVztJQUNuRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixxQkFBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0tBQ3ZDO1NBQU07UUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDdkM7QUFDTCxDQUFDLENBQUE7QUFFYSxtQ0FBZSxHQUFHO0lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzVCLENBQUMsQ0FBQTtBQUVhLCtCQUFXLEdBQUc7SUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0FBQzNCLENBQUMsQ0FBQTtBQUVhLGlEQUE2QixHQUFHLFVBQVMsSUFBWSxFQUFFLEVBQVU7SUFDN0UsTUFBTSxJQUFJLEdBQUcsSUFBNEIsQ0FBQztJQUN4QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzlDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FDdkQsQ0FBQTtJQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDdkUsQ0FBQyxDQUFBO0FBRWEsOENBQTBCLEdBQUc7SUFDdkMsSUFBRyxJQUFJLENBQUMsZUFBZSxFQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFrQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQzlFO0FBQ0wsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZGVsYXksIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBOZ1R5cGVGb3JtR3JvdXAgfSBmcm9tIFwiLi9Gb3JtVHlwZUJ1aWxkZXIubW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtR3JvdXBQcml2YXRlc3tcclxuICAgIF9fc3VibWl0dGVkIDogYm9vbGVhbjtcclxuICAgIF9fZXJyb3JzOiBhbnk7XHJcbiAgICBfX2NvbnRyYWN0RXJyb3JzOiBhbnk7XHJcbiAgICBfX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdXHJcbn1cclxuLy8gQGR5bmFtaWNcclxuZXhwb3J0IGNsYXNzIEZvcm1FeHRlbmRlZE1ldGhvZHMge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX19zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9fc3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0RXJyb3JzID0gZnVuY3Rpb24gKGNvbmZpZzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fX2Vycm9ycyA9IHsgLi4uY29uZmlnIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRGb3JtRXJyb3JzID0gZnVuY3Rpb24gKGNvbmZpZzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fX2NvbnRyYWN0RXJyb3JzID0geyAuLi5jb25maWcgfTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRGb3JtQ29udHJvbEVycm9ycyA9IGZ1bmN0aW9uIChrZXk6IHN0cmluZywgY29uZmlnOiBhbnkpIHtcclxuICAgICAgICBpZiAoISF0aGlzLl9fY29udHJhY3RFcnJvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2NvbnRyYWN0RXJyb3JzID0geyAuLi50aGlzLl9fY29udHJhY3RFcnJvcnMgfTtcclxuICAgICAgICAgICAgdGhpcy5fX2NvbnRyYWN0RXJyb3JzW2tleV0gPSBjb25maWc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fX2NvbnRyYWN0RXJyb3JzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuX19jb250cmFjdEVycm9yc1trZXldID0gY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1hcmtBc1N1Ym1pdHRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9fc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzU3VibWl0dGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fc3VibWl0dGVkXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhZGRGb3JtQ29udHJvbFZhbGlkaXR5VHJhY2tlciA9IGZ1bmN0aW9uKGZyb206IHN0cmluZywgdG86IHN0cmluZyl7XHJcbiAgICAgIGNvbnN0IGZvcm0gPSB0aGlzIGFzIE5nVHlwZUZvcm1Hcm91cDxhbnk+O1xyXG4gICAgICAgIGNvbnN0IHN1YiQgPSBmb3JtLmNvbnRyb2xzW2Zyb21dLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICAgICAgICBkZWxheSgxKSxcclxuICAgICAgICAgICAgdGFwKF8gPT4gZm9ybS5jb250cm9sc1t0b10udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpKVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLl9fc3Vic2NyaXB0aW9ucyA9IFsuLi50aGlzLl9fc3Vic2NyaXB0aW9ucywgc3ViJC5zdWJzY3JpYmUoKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB1bnN1YnNjcmliZVZhbGlkaXR5VGFja2VycyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5fX3N1YnNjcmlwdGlvbnMpe1xyXG4gICAgICAgICAgICAodGhpcy5fX3N1YnNjcmlwdGlvbnMgYXMgU3Vic2NyaXB0aW9uW10pLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==