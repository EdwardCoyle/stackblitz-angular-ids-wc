import { TestBed } from '@angular/core/testing';
import { IdsAlertComponent } from './ids-alert.component';
describe('IdsAlertComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsAlertComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsAlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-alert.component.spec.js.map