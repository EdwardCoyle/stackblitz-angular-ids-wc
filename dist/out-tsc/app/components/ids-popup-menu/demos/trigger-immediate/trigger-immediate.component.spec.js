import { TestBed } from '@angular/core/testing';
import { TriggerImmediateComponent } from './trigger-immediate.component';
describe('TriggerImmediateComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TriggerImmediateComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(TriggerImmediateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trigger-immediate.component.spec.js.map