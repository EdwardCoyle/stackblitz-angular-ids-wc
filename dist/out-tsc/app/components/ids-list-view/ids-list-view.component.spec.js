import { TestBed } from '@angular/core/testing';
import { IdsListViewComponent } from './ids-list-view.component';
describe('IdsListViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsListViewComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsListViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-list-view.component.spec.js.map