import { TestBed } from '@angular/core/testing';
import { IdsSwitchComponent } from './ids-switch.component';
describe('IdsSwitchComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsSwitchComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsSwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-switch.component.spec.js.map