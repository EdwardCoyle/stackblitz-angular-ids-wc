import { TestBed } from '@angular/core/testing';
import { MixedSelectionComponent } from './mixed-selection.component';
describe('MixedSelectionComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MixedSelectionComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(MixedSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mixed-selection.component.spec.js.map