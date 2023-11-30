import { TestBed } from '@angular/core/testing';
import { IdsBlockGridComponent } from './ids-block-grid.component';
describe('IdsBlockGridComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsBlockGridComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsBlockGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-block-grid.component.spec.js.map