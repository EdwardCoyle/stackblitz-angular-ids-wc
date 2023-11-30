import { TestBed } from '@angular/core/testing';
import { IdsTriggerFieldComponent } from './ids-trigger-field.component';
describe('IdsTriggerFieldComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsTriggerFieldComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsTriggerFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-trigger-field.component.spec.js.map