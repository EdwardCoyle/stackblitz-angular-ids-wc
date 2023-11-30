import { TestBed } from '@angular/core/testing';
import { MultipleSelectionComponent } from './multiple-selection.component';
describe('MultipleSelectionComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MultipleSelectionComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(MultipleSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=multiple-selection.component.spec.js.map