import { TestBed } from '@angular/core/testing';
import { IdsDataGridComponent } from './ids-data-grid.component';
describe('IdsDataGridComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsDataGridComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsDataGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-data-grid.component.spec.js.map