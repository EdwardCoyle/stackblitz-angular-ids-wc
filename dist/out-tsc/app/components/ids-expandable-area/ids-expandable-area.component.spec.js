import { TestBed } from '@angular/core/testing';
import { IdsExpandableAreaComponent } from './ids-expandable-area.component';
describe('IdsExpandableAreaComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsExpandableAreaComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsExpandableAreaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-expandable-area.component.spec.js.map