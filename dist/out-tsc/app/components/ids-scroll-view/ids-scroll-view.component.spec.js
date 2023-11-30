import { TestBed } from '@angular/core/testing';
import { IdsScrollViewComponent } from './ids-scroll-view.component';
describe('IdsScrollViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsScrollViewComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsScrollViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-scroll-view.component.spec.js.map