import { TestBed } from '@angular/core/testing';
import { IdsTooltipComponent } from './ids-tooltip.component';
describe('IdsTooltipComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsTooltipComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-tooltip.component.spec.js.map