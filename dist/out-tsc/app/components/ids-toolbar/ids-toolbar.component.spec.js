import { TestBed } from '@angular/core/testing';
import { IdsToolbarComponent } from './ids-toolbar.component';
describe('IdsTooltipComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsToolbarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-toolbar.component.spec.js.map