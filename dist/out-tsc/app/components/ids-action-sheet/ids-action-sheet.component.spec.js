import { TestBed } from '@angular/core/testing';
import { IdsActionSheetComponent } from './ids-action-sheet.component';
describe('IdsActionSheetComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsActionSheetComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsActionSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-action-sheet.component.spec.js.map